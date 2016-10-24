
function uploadController($scope,$state){

$scope.creds = {
  bucket: 'tothenew-nu',
  access_key: 'YOUR_ACCESS_KEY',
  secret_key: 'YOUR_SECRET_KEY'
}
 
$scope.uploadPic = function(files) {
$scope.file = files;
  // Configure The S3 Object 
  AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
  AWS.config.region = 'ap-south-1';
  var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
 
  if($scope.file) {
    var params = { Key: $scope.file.name, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };
 
    bucket.putObject(params, function(err, data) {
      if(err) {
        // There Was An Error With Your S3 Config
        alert(err.message);
        return false;
      }
      else {
        // Success!
        alert('Upload Done');
      }
    })
    .on('httpUploadProgress',function(progress) {
          // Log Progress Information
          console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
        });
  }
  else {
    // No File Selected
    alert('No File Selected');
  }
}

}






angular
  .module('myApp')
  .controller('uploadController', ['$scope','$state',uploadController ]);
