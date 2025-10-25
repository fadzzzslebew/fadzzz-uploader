const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

/**
 * Upload file to FadzzzCloud by Fadzzz Digital
 * @param {Buffer} filePath - File buffer (from local path)
 * @returns {Promise<Object>} JSON response
 */
async function uploadFile(filePath) {
    try {
        const formData = new FormData();
        formData.append('file', fs.createReadStream(filePath)); 
        const response = await axios.post('https://fadzzzcloud.biz.id/upload.php', formData, {
            headers: formData.getHeaders(), 
        });
        return response.data;
    } catch (error) {
        const errorMessage = error.response ? `Status ${error.response.status} - ${error.response.data.message || 'Server error.'}` : error.message;
        return { success: false, message: `Upload Gagal Total: ${errorMessage}` };
    }
}

module.exports = uploadFile;
