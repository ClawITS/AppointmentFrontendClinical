import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 
import 'primeicons/primeicons.css'; 

export const App = () => {

  const [visible, setVisible] = useState(false);
  const [nodes, setNodes] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [filterMode, setFilterMode] = useState('lenient');


  return (
    <div className="card flex justify-content-center">
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h1>PrimeReact Sidebar</h1>
    </Sidebar>
    <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />

    <SelectButton value={filterMode} onChange={(e) => setFilterMode(e.value)}/>

<TreeTable value={nodes} globalFilter={globalFilter}  tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
</TreeTable>

</div>
  )
}