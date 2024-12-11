import { TransactionType } from "@/difinitions/types/table-type/transaction";
import transactions from "@/data/transactions.json";
import { DataTable } from "@/components/table/data-table";
import { transactionColumns } from "@/components/table/columns";


export default function Contributor() {

  const typedTransactions: TransactionType[] = transactions;


    return (
      <section className="flex flex-col flex-1 p-9">
          <DataTable columns={transactionColumns} data={typedTransactions} />
      </section>
    );
  }