<p align="center"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.vectorstock.com%2Fi%2F1000x1000%2F71%2F72%2Fteacher-vector-1597172.jpg&f=1&nofb=1" width="100" height="100"</p>

# **Offline-EDU** -> Double//Slash - IEEE 

### 
---


## Our problem statement

> Technology is termed as a blessing that should comfort our daily lives. But for efficient use of software technology, internet connection is a must. With the advent of the recent pandemic, majority of lives have preached applications using strong internet connection to perform their daily activities. Starting from commerce to job meetings to education, everything is based on a stable connection to the World Wide Web.  But how much of the world exactly benefits from this technological bliss?
As of 2021, 34.4% of the world or 2.44 billion people still do not have an access to internet services, hence have remained disconnected from the world for about 2 years, during the ongoing pandemic[source1]. According to UNICEF [source2], two-thirds of all children in the world(about 170 million children) do not have access to internet. Merely 8.5% of Indian students have access to internet, hence for majority of children in the world and in India, education is on stand still for about 2 years now. 
Internet connection is a mandatory requirement for multimedia files transfer, starting from image to videos, audio files, streaming services etc. Even sending media other than text on SMS requires a stable mobile data internet connection, which is infeasible and very expensive for most of the children in the world. 

## Solution
 > We have designed a system that allows a teacher to send notes as media files (image, audio and text)  by converting these to text only messages and sending the files through SMS to his/her students, thereby letting students receive the media files offline. Only the teachers require a moderate to stable internet connection on their side, the students do need internet connection at all. Hence we strive to achieve a smooth offline education system for all, so that no child misses out on his/ her development.

# Working
  
## Teacher Application: 
  The application lets a teacher to login or signup to their account. The teacher can create a classroom and add the phone numbers of her students to the classroom. They she can click a picture of the class note, record an audio related to the note if required and click on send. Backend of the application converts the multimedia to text and send an sms to all the phone numbers listed in the classroom.
 <img src='https://user-images.githubusercontent.com/55049859/125185567-354f2e80-e243-11eb-95d1-8f51c7923fd4.png' heigth=300 width=200 />
<img src='https://user-images.githubusercontent.com/55049859/125185581-48fa9500-e243-11eb-98a7-736f108e3e5a.png' heigth=300 width=200 />
<img src='https://user-images.githubusercontent.com/55049859/125185589-56b01a80-e243-11eb-8248-d15dca306b3e.png' heigth=300 width=200 />
 <img src='https://user-images.githubusercontent.com/55049859/125185600-66c7fa00-e243-11eb-96be-d95a83f611eb.png' heigth=300 width=200 />
<img src='https://user-images.githubusercontent.com/55049859/125185610-747d7f80-e243-11eb-87f0-0d19d7c34ced.png' heigth=300 width=200 />



## Student Application:
  The student has to download an application only once, rest works offline. Once the sms is received, the audio its received as text sms, the image is sent as an encoded string. The student has to copy the image string and paste in the downloaded application to see the image. Hence the entire process(except one-time downloading the app) is happens offline. 
 
<img src='https://user-images.githubusercontent.com/55049859/125185429-64b16b80-e242-11eb-8ab0-5fc08d9e2a1d.png' heigth=300 width=200 />
<img src='https://user-images.githubusercontent.com/55049859/125185469-99252780-e242-11eb-9196-4d48e498a3b5.png' heigth=300 width=200 />
  <img src='https://user-images.githubusercontent.com/55049859/125185483-ae01bb00-e242-11eb-805c-d3df3ce8c2af.png' heigth=300 width=200 />

 
## Future Development:
  Reduce the size of image string while keeping the resolution good to limit the number of sms texts send. Improvise to sending videos by converting frames to texts. Allow longer audio files to be sent on sms.
 
## Challenges we ran into --
1. Reading SMS automatically from the device 
2. Converting Image into compressed base64 string
3. Sending SMS of base64 string


<!-- 
## Features offered by Offline-EDU

- ### **Real Time predictions of Hospital Data**
  - Using 'PyTorch' model to predict hospital data of the next day.
- ### **Hospital Side Web Application**
  - An interface for the hospital to update data from its database and also add and update patient medical history.
- ### **Patient Side App**
  - An interface for a patient to browse through nearby hospitals and select a hospital based on its performance, also observe        his/her medical history live.
## Technology Stack and Dependencies
 -->
 ## Technology Stack and Dependencies
- **ML**
  - numpy
  - IBM Watson
  - Pillow
  - Open-CV
- **APIs and Backend**
  - Firebase
  - Flask
- **Front-end**
  - React Native 

# Thank You!

<h1 align="center"> Contributors </h1>
<table align="center">
<tr align="center">
<td>
<strong>Breenda Das</strong>
<p align="center">
<img src = "https://cdn.discordapp.com/attachments/857649911759896579/858635368945156116/breenda.jpeg"  height="120" alt="Breenda Das">
</p>
<p align="center">
<a href = "https://github.com/ds-brx"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://www.linkedin.com/in/breenda-das-68a1891aa/">
<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/>
</a>
</p>
</td>
<td>
<strong>Shubhra Agarwal</strong>
<p align="center">
<img src = "https://cdn.discordapp.com/attachments/852945305280577588/853135575421943858/Untitled_design.png" alt="Shubhra Agarwal" height="120">
</p>
<p align="center">
<a href = "https://github.com/shubhraagarwal"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://www.linkedin.com/in/agarwalshubhra/">
<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/>
</a>
</p>
</td>
</tr>
</table>
<table align="center">
<tr align="center">
<td>
<strong>Naman Garg</strong>
<p align="center">
<img src = "https://avatars.githubusercontent.com/u/40496687?v=4" alt="Palak Aggarwal" height="120">
</p>
<p align="center">
<a href = "https://github.com/Namangarg110"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://www.linkedin.com/in/namangarg110/">
<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/>
</a>
</p>
</td>
<td>
<strong>Sumrit Grover</strong>
<p align="center">
<img src = "https://cdn.discordapp.com/attachments/852945305280577588/852945815592632360/sumrit_grover.jpg" alt="Sumrit Grover" height="120">
</p>
<p align="center">
<a href = "https://github.com/smgrv123"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://www.linkedin.com/in/sumrit-grover-1689351aa/">
<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/>
</a>
</p>
</td>
</tr>
</table>
