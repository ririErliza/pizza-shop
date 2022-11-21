export const getServerSideProps = async({params})=>{
    const query =`*{_type =='order' && _id =='${params.id}'}`
}

export default function Orders({order}) {

}