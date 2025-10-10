/* eslint-disable react-hooks/exhaustive-deps */
import TableBook from "../component/book/book.table";
import { getBookApi } from "../service/api.service";
import { useEffect, useState } from "react";
import CreateBookModal from "../component/book/book.create";

const BookPage = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [total, setTotal] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        getBook(currentPage, pageSize)
    }, [currentPage, pageSize])

    const getBook = async (current, size) => {
        const response = await getBookApi(current, size)
        if (response.data) {
            setData(response.data.result)
            setCurrentPage(current)
            setPageSize(size)
            setTotal(response.data.meta.total)
        }
    }

    return (
        <>
            <CreateBookModal
                getBook={getBook}
                currentPage={currentPage}
                pageSize={pageSize}
            />

            <TableBook
                currentPage={currentPage}
                pageSize={pageSize}
                setCurrentPage={setCurrentPage}
                setPageSize={setPageSize}
                data={data}
                total={total}
                getBook={getBook}
            />
        </>
    )
}

export default BookPage;