import { useState } from 'react'
import toast from 'react-hot-toast'

import { uploadPDF } from '../../services/uploadService'

function UploadBox() {
  const [loading, setLoading] = useState(false)

  const handleUpload = async e => {
    const file = e.target.files[0]

    if (!file) return

    try {
      setLoading(true)

      await uploadPDF(file)

      toast.success('PDF uploaded successfully')
    } catch (error) {
      toast.error('Upload failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center">
      <input type="file" accept="application/pdf" onChange={handleUpload} />

      {loading && <p className="mt-4">Uploading...</p>}
    </div>
  )
}

export default UploadBox