//노드 body data 기능 실습
const express = require('express');

const app = express();

app.use(express.json())
const port = 6000;

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요')
});
