# MediXTrans
## About
In this project, we developed a comprehensive web application called "MediXTrans" specifically designed for medical personnel. MediXTrans offers a user-friendly interface where medical professionals can securely log in and efficiently record essential patient information, including symptoms, previous medications, current medications, and other relevant details. To facilitate accurate and convenient recording, the application incorporates advanced speech-to-text technology. Users can initiate the recording using features such as "start," "stop," and even "pause" if necessary. The application ensures that transcriptions are generated in real-time, providing a seamless experience for medical personnel. 

One of the key strengths of MediXTrans is its ability to handle ambient noise. It has been optimized to process audio recordings even in the presence of certain levels of background noise, ensuring reliable transcription results. This feature is particularly valuable in busy clinical environments where background noise is common. Additionally, it supports the uploading of audio files in various formats, including '.wav', '.mp3', and '.m4a'. This flexibility allows medical professionals to work with their preferred recording devices or use existing audio files for transcription purposes. To achieve accurate transcriptions, MediXTrans utilizes a fine-tuned model specifically tailored for medical speech-to-text conversion. The resulting transcriptions are stored securely in a MongoDB database for easy access and retrieval. Also, the application leverages named entity recognition for medical terms in transcription to make it easy for analyzing patient reports. 

The integration of MediXTrans into healthcare workflows brings numerous benefits. It significantly streamlines the documentation process, saving time and effort for medical personnel. The availability of accurate transcriptions enhances the overall quality of patient care, as healthcare providers can access detailed and reliable patient information. Furthermore, the digital format of the transcriptions reduces the need for manual documentation, minimizing the risk of errors and ensuring data integrity.

Overall, the development of the "MediXTrans" web application demonstrates the potential of speech-to-text technology in revolutionizing medical data recording and documentation. By providing a user-friendly interface, noise-tolerant transcription capabilities, and compatibility with multiple audio file formats, MediXTrans aims to enhance the efficiency and effectiveness of healthcare professionals in delivering high-quality patient care.

## TechStack 
  1. ReactJs
  2. MongoDB
  3. NodeJs
  4. Python
  5. API Integration
  6. Hugging Face Transformer

## User Interface

### Landing Page
<img width="960" alt="landing" src="https://github.com/Roshan23R/MediXTrans/assets/82640582/0247216c-b3f2-487a-8b24-76ed746d9891">

### Login Page
<img width="958" alt="login" src="https://github.com/Roshan23R/MediXTrans/assets/82640582/d760e03e-329a-4449-97b9-770138575900">

### Transcription Page
<img width="960" alt="transcript" src="https://github.com/Roshan23R/MediXTrans/assets/82640582/f5c42529-eb5b-48a1-a2b1-e62a5b28ef76">

### Sending Mail 
<img width="960" alt="mail" src="https://github.com/Roshan23R/MediXTrans/assets/82640582/ce6bd5a9-fe39-441a-b392-b5d030e8defb">

### Analysis using BioMedical Entity Recognition
<img width="960" alt="analysis" src="https://github.com/Roshan23R/MediXTrans/assets/82640582/db8e368f-863f-4b07-b1c2-b6e0926efc12">
