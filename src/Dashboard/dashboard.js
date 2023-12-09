
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
//import { CustomerService } from './service/CustomerService';
import {db} from '../firestore';

export default function Dashboard() {
    const [leads, setLeads] = useState([]);
    const [limit, setLimit] = useState(100);
    const getLeads = async () => {

            let doc = await db.collection('companies').doc("2Lm3oDwS2N2UxBPqHeDw").collection('leads').limit(limit).get();
      
           let leadsData = await Promise.all( doc.docs.map(async (data) => {
              let leadData = data.data();
              let assignedToSnap = await db.collection('users').doc(leadData.assignedTo).get();
              leadData['assignedTo'] = assignedToSnap.data().userName;
              let leadSourceSnap = await db.doc(leadData['leadSource']).get();
              leadData['leadSource'] = leadSourceSnap.data().name;
              let leadStatusSnap = await db.doc(leadData['leadStatus']).get();
              leadData['leadStatus'] = leadStatusSnap.data().name;
              let projectSnap = await db.doc(leadData['projectId']).get();
              leadData['projectId'] = projectSnap.data().name;
              console.log(leadData)
              return leadData;
            }));
            
            setLeads(leadsData);
      
          }

          const setPage = (rows) => {
            
           
            setLimit(rows)
        
          }

          useEffect(() => {
           
            getLeads();
          },[limit])
    useEffect(() => {

      getLeads()
    }, []);

    return (
        <div className="card">
            <DataTable className = 'leadTable' value={leads} paginator rows={limit} onPage={(e) => setPage(e.rows)} rowsPerPageOptions={[100, 200, 500, 1000]} tableStyle={{ minWidth: '100vw' }}>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="phoneNumber" header="phoneNumber" style={{ width: '25%' }}></Column>
                <Column field="active" header="status" style={{ width: '25%' }}></Column>
                <Column field="assignedTo" header="Assignee" style={{ width: '25%' }}></Column>
                <Column field="character" header="Character" style={{ width: '25%' }}></Column>
                <Column field="countryName" header="Country" style={{ width: '25%' }}></Column>
                <Column field="projectId" header="Project" style={{ width: '25%' }}></Column>
                <Column field="leadStatus" header="Status" style={{ width: '25%' }}></Column>
                <Column field="leadSource" header="Source" style={{ width: '25%' }}></Column>
                {/* <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column> */}
            </DataTable>
        </div>
    );
}


        