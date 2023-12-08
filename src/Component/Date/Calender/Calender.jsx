import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react';

export default class Calender extends Component {  

    constructor(props){
        super(props);
    }
    dateClick=(info)=>{
        alert(info.dateStr)
    }
    render() {
        return(
            <>
            <div style={{ display:'grid', gridTemplateColumns:"2fr 1fr"}}>
                <FullCalendar   
                    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    initialView={'dayGridMonth'}
                    headerToolbar={
                        {
                            start: 'today', 
                            center: 'title',
                            end: 'prev,next' 
                        }
                    }
                    height={"85vh"}
                    dateClick={this.dateClick}
                    events={[{title:'판매건수 : 23건', date:'2023-05-11',},{title:'판매건수 : 23건',date:'2023-05-13',}]}
                />
            </div>
            </>     
        );
    }
}
