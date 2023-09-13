export const loadInvoices = (invoices)=>{
  return{
    type: 'LOAD_INVOICES',
    invoices,
  }
}
