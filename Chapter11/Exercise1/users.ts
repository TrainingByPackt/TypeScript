let performUpload = function(
  imgStatus: string
): Promise<{ imgStatus: string }> {
  return new Promise(resolve => {
    console.log(`Status: ${imgStatus}`);
    setTimeout(() => {
      resolve({ imgStatus: imgStatus });
    }, 2000);
  });
};

var upload;
var compress;
var transfer;

performUpload("uploading...")
  .then(res => {
    upload = res;
    console.log("Upload rsponse" + upload);
    return performUpload("compressing...");
  })
  .then(res => {
    transfer = res;
    return performUpload("transfering...");
  })
  .then(res => {
    upload = res;
    return performUpload("Image upload completed");
  });
