# 🌩️ Fadzzz Uploader

Fadzzz Uploader is a lightweight Node.js package that makes it easy to upload files to [FadzzzCloud](https://fadzzzcloud.biz.id).  
It supports both **CommonJS (CJS)** and **ECMAScript Modules (ESM)**.

[![npm version](https://img.shields.io/npm/v/fadzzz-uploader.svg)](https://www.npmjs.com/package/fadzzz-uploader)  
[![License: MIT](https://img.shields.io/badge/License-Custom%20MIT-blue.svg)](LICENSE)  
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-brightgreen)](https://nodejs.org/)  
[![Support CJS & ESM](https://img.shields.io/badge/Supports-CJS%20%7C%20ESM-orange)](#)

---

## 📦 Installation
```bash
npm install fadzzz-uploader
```

---

## 🚀 Usages

### **1. CommonJS (CJS)**

```js
const uploadFile = require('fadzzz-uploader');
const fs = require('fs');

(async () => {
  const result = await uploadFile('/path/to/your/file.png');
  console.log(result);
})();
```

### **2. ECMAScript Modules (ESM)**

```js
import uploadFile from 'fadzzz-uploader';
import fs from 'fs';

(async () => {
  const result = await uploadFile('/path/to/your/file.png');
  console.log(result);
})();
```

---

## 📌 Api Responses Structure

|   Field    | Type   |            Description                 |
| ---------- | ------ | -------------------------------------  |
| `status`   | String | Upload status: ("true") / ("false")  |
| `message` | String | Information on whether the file was uploaded successfully or not |
| `filename` | String | Final uploaded file name               |
| `url`      | String | Direct link to uploaded file           |
| `size`     | Number | File size in readable format (KB, MB)  |
| `type`     | String | MIME type of the file                  |

📥 API Response

```json
{
  success: true,
  message: 'Berkas berhasil di-upload!',
  filename: 'uploads-12345678910.png',
  url: 'https://fadzzzcloud.biz.id/files/uploads-12345678910.png',
  size: '60.64 KB',
  type: 'image/png'
}
```

---

## 🛡 License & Legal
This package is under a Custom MIT License:

You may not copy, modify, resell, or redistribute this package without explicit permission.
Violators will be prosecuted under Indonesian and international copyright law.

📄 See full LICENSE file for complete details.
---

## 🙋 Support & Contact
Got questions or feedback? Reach out:
🌐 Website: [FadzzzCloud](https://fadzzzcloud.biz.id)
💬 WhatsApp: [Channels](https://whatsapp.com/channel/0029VaxYWls5q08hTLgqKp3K)
🎲 Github: [GitHub](https://github.com/fadzzzslebew)

---

## 👨‍💻 Author

- **Fadzzz Digital** - [GitHub](https://github.com/fadzzzslebew) | [Website](https://fadzzzcloud.biz.id)