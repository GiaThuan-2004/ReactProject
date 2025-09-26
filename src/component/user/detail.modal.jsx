import { Drawer, Flex } from 'antd';

const DetailModal = ({ isDetailModalOpen, setIsDetailModalOpen, dataDetail }) => {

    if (dataDetail) {
        return (
            <>
                <Drawer
                    title="User Detail"
                    closable={{ 'aria-label': 'Close Button' }}
                    onClose={() => setIsDetailModalOpen(false)}
                    open={isDetailModalOpen}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p>ID: {dataDetail._id}</p>
                        <p>FullName: {dataDetail.fullName}</p>
                        <p>Email: {dataDetail.email}</p>
                        <p>Phone: {dataDetail.phone}</p>
                    </div>
                </Drawer>
            </>
        );
    }
}

export default DetailModal;