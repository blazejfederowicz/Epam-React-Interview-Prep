
interface ModalStructureProps{
    hideModal: () => void;
}

export default function ModalStructure ({hideModal}:ModalStructureProps){
    return (
        <div role="dialog" style={{width:"200px", display:"flex", flexDirection:"column", position:"fixed", top:"50%", left:"50%", transform:"translate(-50%,-50%)", backgroundColor:"cyan", borderRadius:"10px", padding:"2em"}}>
            <h4>Modal is open</h4>
            <button onClick={hideModal}>close</button>
        </div>
    )
}