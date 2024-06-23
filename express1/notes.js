import express from 'express';
const router = express.Router();

let notes = []; //배열

router.get('/', (req, res) => {
    const template = 
    `
    <head></head>
    <body>
      <h1>Notes</h1>
      <ul>
        ${notes.map((note, index) => `
          <li>
            ${note}
            <form action="/notes/${index}/delete" method="GET" style="display:inline;">
              <button type="submit">삭제</button>
            </form>
          </li>`).join('')}
      </ul>
      <form action="/notes" method="POST">
        <input type="text" name="note" placeholder="메모를 입력하세요" required>
        <button type="submit">추가</button>
      </form>
    </body>
    `;
    res.send(template);
});

router.post('/', (req, res) => { 
    const note = req.body.note;
    notes.push(note);
    res.redirect('/notes');
});

router.get('/:id/delete', (req, res) => { 
    const id = parseInt(req.params.id, 10); //10진수 변환시 pareseInt사용
    if (id >= 0 && id < notes.length) { 
        notes.splice(id, 1); //배열 요소 삭제(인덱스,지울개수)
    }
    res.redirect('/notes');
});

export default router;
