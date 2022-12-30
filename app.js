//노드 body data 기능 실습
const express = require('express');

const app = express();

app.use(express.json())
const port = 6000;

app.get('/querystring', (req, res) => {
    res.send('querystring 테스트 페이지 입니다')
  ))

app.post('/body-formdata', (req, res) => {
    res.send('body-formdata 테스트 페이지 입니다')
  ))

app.post('/body-multipart', (req, res) => {
    res.send('body-multipart 테스트 페이지 입니다')
  ))

app.post('/body-json', (req, res) => {
    res.send('body-json 테스트 페이지 입니다')
  ))

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요')
});
