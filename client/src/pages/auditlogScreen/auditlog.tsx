/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { getAuditlog } from '../../Axios/apis/apis'
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper,
    Typography, CircularProgress
} from '@mui/material'

const AuditLogScreen = () => {
    const [tableData, setTableData] = useState<any[]>([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getDetails = async () => {
            setLoading(true)
            const getAuditLogDetails = await getAuditlog()
            setTableData(getAuditLogDetails)
            setLoading(false)
        }
        getDetails()
    }, [])

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const formatDate = (date: string) => {
        const newDate = new Date(date)
        return newDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    }

    return (
        <div>
            <Typography variant='h6' sx={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 'bold' }}>
                Audit Logs
            </Typography>

            {loading ? (
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <CircularProgress />
                    <Typography variant="body1">Loading...</Typography>
                </div>
            ) : tableData.length === 0 ? (
                <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '2rem' }}>
                    No Data Available
                </Typography>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    padding: '16px',
                                    fontSize: '18px'
                                }}>Time</TableCell>
                                <TableCell sx={{
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    padding: '16px',
                                    fontSize: '18px'
                                }}>Activity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ textAlign: 'center' }}>{formatDate(row.time)}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.activity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    )
}

export default AuditLogScreen
