import express from 'express'
import  {getTransactions, getBreakDown, getBalance, createNewTransaction, deleteTransaction} from '../controller/Handler.js'
const router = express.Router();

router.get('/', getTransactions)

router.get('/breakdown', getBreakDown)

router.get('/balance', getBalance)

router.post('/makeTransaction', createNewTransaction)

router.delete('/deleteTransaction/:transActionId', deleteTransaction)

export default router;
