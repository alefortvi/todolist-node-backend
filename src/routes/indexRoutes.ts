import {Router} from 'express';
import {getAllJobs,createJob,orderById,getStates,editState} from '../controllers/jobs.index.controller';
import multer from '../libs/multer';
const router = Router();


// create with GET and POST
router.route('/')
    .get(getAllJobs)
    .post(multer.single('image'),createJob);


router.route('/states')
    .get(getStates);

// create with GET and POST
router.route('/order')
    .get(orderById);

 router.route('/edit/:id')
         .put(editState);


export default router;
