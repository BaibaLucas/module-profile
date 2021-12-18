import { imgUploadSuccess } from "../store/action";


const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

export default async function getCanvasImage(imageSrc) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
	// get the scale
	// const scale = Math.min(canvas.width / image.width, canvas.height / image.height);
	// get the top left position of the image
	// const x = (canvas.width / 2) - (image.width / 2) * scale;
	// const y = (canvas.height / 2) - (image.height / 2) * scale;
	// ctx.drawImage(
	// 	image,
	// 	x,
	// 	y,
	// 	image.width * scale,
	// 	image.height * scale,
	// );
	// ctx.drawImage(
	// 	image,
	// 	300,
	// 	0,
	// 	200,
	// 	true
	// 	);
  // As Base64 string
	// return canvas.toDataURL("image/jpeg");
	canvas.width = image.width;
	canvas.height = image.height;
	ctx.drawImage(
		image, 0,0
	)
  return canvas;
}


// To convert dataUrl (which we get from our blob) to a a file object
export const dataURLtoFile = (dataurl, filename) => {
	const arr = dataurl.split(",");
	const mime = arr[0].match(/:(.*?);/)[1];
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);

	while (n--) u8arr[n] = bstr.charCodeAt(n);

	return new File([u8arr], filename, { type: mime });
};

