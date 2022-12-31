//노드 body data 기능 실습 포트 6000주의
const express = require('express');

const app = express();
const port = 6000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/querystring', (req, res) => {
    const id = req.query.id
    res.send('id')
    // console.log(req.query.id)
    // console.log()
    // res.send('querystring 테스트 페이지 입니다')
})

app.get("/", (req, res) => {
    res.send('<form action="/" enctype="multiaprt/form-data" method="post"><input name="id"/><button  type="submit">전송</button></form>')
})

app.post("/", (req, res) => {
    const id = req.body.id
    res.send(id)
})

app.post('/body-formdata', (req, res) => {
    res.send('body-formdata 테스트 페이지 입니다')
})

app.post('/body-multipart', (req, res) => {
    res.send('body-multipart 테스트 페이지 입니다')
})

app.post('/body-json', (req, res) => {
    res.send('body-json 테스트 페이지 입니다')
})

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요')
});