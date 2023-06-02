import { useState } from 'react';
import './UploadForm.css';

export default function UploadForm() {
  const [image, setImage] = useState();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch('/api/uploads', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error(`Fetch Error ${response.status}`);
      const result = await response.json();
      setImage(result[0].url);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
        <div className="col col-md-8">
          <h3 className="text-center mb-5">React File Uploads</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Caption:
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  className="form-control bg-light"
                />
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input
                required
                type="file"
                name="image"
                accept=".png, .jpg, .jpeg, .gif"
              />
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>
          <div className="picture-div">
            {image && <img alt="fresh" src={image} />}
          </div>
        </div>
      </div>
    </div>
  );
}
