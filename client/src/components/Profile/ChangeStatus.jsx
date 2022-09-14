import { Button } from 'react-bootstrap'

export default function ChangeStatus({item, index, changeStatus}) {
    
    return(
        <div className='dropdown'>
            <Button className='btn btn-primary'>{item.status}</Button>
            <div className='dropdown-content'>
                {item.status !== 'applied' && <p onClick={() => changeStatus(item._id, "applied", item.status, index)}>Applied</p>}
                {item.status !== 'interview' && <p onClick={() => changeStatus(item._id, "interview", item.status, index)}>Interview</p>}
                {item.status !== 'rejected' && <p onClick={() => changeStatus(item._id, "rejected", item.status, index)}>Rejected</p>}
            </div>
        </div>
    );
}