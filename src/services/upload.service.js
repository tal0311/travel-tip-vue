export const uploadService = {
  uploadImg
}

async function uploadImg(base64, folder = 'Travel Tip') {
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDNAME}/image/upload`

  try {
    const formData = new FormData()
    formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET)
    formData.append('file', base64)
    if (folder) {
      formData.append('folder', folder)
    }

    const res = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData
    })


    const data = await res.json()
    return data.secure_url

  } catch (err) {
    console.error('Failed to upload', err)
    throw err
  }
}

// export const uploadService = {
//   uploadImg
// }

// // const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDNAME}/image/upload`

// // async function uploadImg(base64, folder='Travel Tip') {
// //   const FORM_DATA = new FormData()

// //   FORM_DATA.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET)
// //   FORM_DATA.append('file', base64)
// //   if (folder) {
// //     FORM_DATA.append('folder', folder)
// //   }

// //   try {
// //     const res = await fetch(UPLOAD_URL, {
// //       method: 'POST',
// //       body: FORM_DATA,
// //     })
// //     return res.json()
// //   }
// //   catch (err) {
// //     console.dir(err)
// //   }
// // }
