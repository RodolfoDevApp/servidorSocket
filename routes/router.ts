
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {

    res.json({

        ok:true,
        mensaje: 'Todo esta bien.'

    });

});

router.post('/mensajes', (req: Request, res: Response) => {
    
    const reqBody = req.body.reqBody;
    const reqFrom = req.body.reqFrom;

    res.json({

        ok:true,
        reqBody,
        reqFrom

    });

});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    
    const reqBody = req.body.reqBody;
    const reqFrom = req.body.reqFrom;
    const reqId = req.params.id;

    res.json({

        ok:true,
        reqBody,
        reqFrom,
        reqId

    });

});

export default router;