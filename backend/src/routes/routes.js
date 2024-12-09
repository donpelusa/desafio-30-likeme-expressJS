const { Router } = require('express');
const { addPostDB, listPostDB, likePost, deletePost } = require('../controls/posts');

const router = Router();

router.get('/', (req, res)=> {
    res.send('Inicio!');
    }
);

router.get('/home', (req, res)=> {
    res.send('Hola!');
    }
);

// Methods
router.post('/posts', addPostDB);
router.get('/posts', listPostDB);
router.put('/posts/like/:id', likePost);
router.delete('/posts/:id', deletePost);

module.exports = router;