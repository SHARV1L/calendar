import React from "react";
import ReactDOM from "react-dom";
import "./css/calendar.css";
// ... and fullcalendar-reactwrapper.
import FullCalendar from "fullcalendar-reactwrapper";
import interactionPlugin from "@fullcalendar/interaction";
//import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
//import timeGridPlugin from "@fullcalendar/timegrid";
export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "Long Event",
          start: "2019-07-27",
          end: "2019-07-28"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: "2017-05-09T16:00:00"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: "2017-05-16T16:00:00"
        },
        {
          title: "Conference",
          start: "2017-05-11",
          end: "2017-05-13"
        },
        {
          title: "Meeting",
          start: "2017-05-12T10:30:00",
          end: "2017-05-12T12:30:00"
        },
        {
          title: "Birthday Party",
          start: "2017-05-13T07:00:00"
        },
        {
          title: "Click for Google",
          url: "http://google.com/",
          start: "2019-07-27"
        }
      ],
      // formStyle: false,
      eventData: {},
      eventDate: "",
      formStyle: false,
      calendarEvents: [
        // initial event data
        {
          id: "a",
          title: "test",
          time: "3:00AM-4:00PM",
          start: "2019-07-26T16:30:00",
          end: "2019-07-26T17:30:00",
          slotDuration: "00:15:00",
          resourceEditable: true
        }
        // {
        //   id: "a",
        //   title: "test",
        //   time: "3:00AM-4:00PM",
        //   start: "2019-07-26T16:30:00",
        //   end: "2019-07-26T17:30:00",
        //   slotDuration: "00:15:00",
        //   resourceEditable: true
        // },
        // {
        //   id: "a",
        //   title: "test",
        //   time: "3:00AM-4:00PM",
        //   start: "2019-07-26T16:30:00",
        //   end: "2019-07-26T17:30:00",
        //   slotDuration: "00:15:00",
        //   resourceEditable: true
        // },
        // {
        //   id: "a",
        //   title: "test",
        //   time: "3:00AM-4:00PM",
        //   start: "2019-07-26T16:30:00",
        //   end: "2019-07-26T17:30:00",
        //   slotDuration: "00:15:00",
        //   resourceEditable: true
        // },
        // {
        //   id: "a",
        //   title: "test",
        //   time: "3:00AM-4:00PM",
        //   start: "2019-07-26T16:30:00",
        //   end: "2019-07-26T17:30:00",
        //   slotDuration: "00:15:00",
        //   resourceEditable: true
        // }
      ]
    };
  }

  render() {
    return (
      <div id="example-component">
        <FullCalendar
          id="your-custom-ID"
          header={{
            left: "prev,next today myCustomButton",
            center: "title",
            right: "month,basicWeek,basicDay"
          }}
          plugins={[dayGridPlugin, interactionPlugin]}
          defaultDate={Date.now()}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too mants
          events={this.state.calendarEvents}
          selectable
          selectHelper
          select={this.handleDateClick}
          eventClick={() => {
            console.log("DATE CLICK");
          }}
          displayEventEnd={true}
        />
        <form
          onSubmit={this.onSubmitHandler}
          style={{ display: this.state.formStyle ? "block" : "none" }}
        >
          <label htmlFor="eventDate">EVENT DATE:{this.state.eventDate}</label>
          {/* <input
            id="eventDate"
            type="date"
            placeholder="dd/mm/yyyy"
            name="eventDate"
            value={this.state.eventData.eventDate}
            onChange={this.onChangeHandler}
          /> */}
          <br />
          <br />
          <label htmlFor="eventTime">EVENT TIME</label>
          <input
            id="eventTime"
            type="time"
            placeholder="hh:mm:secs"
            name="eventTime"
            value={this.state.eventData.eventTime}
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <label htmlFor="description">EVENT DESCRIPTION</label>
          <input
            id="description"
            type="text"
            placeholder="Describe your event.."
            name="eventDescription"
            value={this.state.eventData.eventDescription}
            onChange={this.onChangeHandler}
          />
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="text"
            placeholder="hh:mm:secs"
            name="eventDuration"
            value={this.state.eventData.eventDuration}
            onChange={this.onChangeHandler}
          />
          <input id="submitButton" type="submit" value="ADD EVENT" />
        </form>
      </div>
    );
  }

  onSubmitHandler = e => {
    e.preventDefault();
    // console.log(arg.dateStr)
    // console.log(eventData);
    console.log(this.state.eventData.eventDescription);
    console.log(this.state.eventDate);
    console.log(this.state.eventData.eventTime);
    console.log(this.state.eventData.eventDuration);
    alert("Event Successfully Created!!");
    this.setState({ formStyle: false });
    this.setState({
      // add new event data
      calendarEvents: this.state.calendarEvents.concat({
        // creates a new array
        title: this.state.eventData.eventDescription,
        start: this.state.eventDate,
        slotDuration: this.state.eventData.eventDuration
        //startTime:this.state.eventData.eventTime,
        //allDay:false,
        //slotDuration:'00:15:00'
      })
    });
    console.log(this.state.calendarEvents);
  };
  onChangeHandler = e => {
    this.setState({
      eventData: { ...this.state.eventData, [e.target.name]: e.target.value }
    });
  };
  handleDateClick = select => {
    //this.setState({ formStyle: true });
    {
      //console.log(select);
      let d = new Date(select._d);
      console.log(d.getUTCDate());
      //this.setState({ eventDate: select._d });
    }
    console.log("Hello");
  };
}
import React from "react";
import ReactDOM from "react-dom";
import "./css/calendar.css";
// ... and fullcalendar-reactwrapper.
import FullCalendar from "fullcalendar-reactwrapper";
import interactionPlugin from "@fullcalendar/interaction";
// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// import ModalBody from 'react-bootstrap/ModalBody'
// import ModalTitle from 'react-bootstrap/ModalTitle'
// import ModalContext from 'react-bootstrap/ModalContext'
// import ModalHeader from 'react-bootstrap/ModalHeader'
//import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Modal from '@material-ui/core/Modal'
import { Button, InputLabel,Input,FormControl } from "@material-ui/core";
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography'
//import timeGridPlugin from "@fullcalendar/timegrid";
const customStyles = {
  content: {
      top:'50%',
      left:'50%',
      right:'auto',
      bottom:'auto',
      marginRight:'-50%',
      transform: 'translate(-50%,-50%)'
  }
}
const TabContainer= function(props){
  return(
      <Typography component="div" style={{padding:0 , textAlign:'center'}}>
       {props.children}
      </Typography>
  );
}
TabContainer.propTypes={children:PropTypes.node.isRequired}
export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "All Day Event",
          start: "2019-07-26T16:30:00"
        },
        {
          title: "Long Event",
          start: "2019-07-27",
          end: "2019-07-28"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: "2017-05-09T16:00:00"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: "2017-05-16T16:00:00"
        },
        {
          title: "Conference",
          start: "2017-05-11",
          end: "2017-05-13"
        },
        {
          title: "Meeting",
          start: "2017-05-12T10:30:00",
          end: "2017-05-12T12:30:00"
        },
        {
          title: "Birthday Party",
          start: "2017-05-13T07:00:00"
        },
        {
          title: "Click for Google",
          url: "http://google.com/",
          start: "2019-07-27"
        }
      ],
      
      eventData: {},
      //eventDate: "",
      //formStyle: false,
      calendarEvents: [
        // initial event data
        {
          id: "a",
          title: "test",
          time: "3:00AM-4:00PM",
          start: "2019-07-26T16:30:00",
          end: "2019-07-26T17:30:00",
          slotDuration: "00:15:00",
          resourceEditable: true
        }
        // {
        //   id: "a",
        //   title: "test",
        //   time: "3:00AM-4:00PM",
        //   start: "2019-07-26T16:30:00",
        //   end: "2019-07-26T17:30:00",
        //   slotDuration: "00:15:00",
        //   resourceEditable: true
        // },
        // {
        //   id: "a",
        //   title: "test",
        //   time: "3:00AM-4:00PM",
        //   start: "2019-07-26T16:30:00",
        //   end: "2019-07-26T17:30:00",
        //   slotDuration: "00:15:00",
        //   resourceEditable: true
        // },
        // {
        //   id: "a",
        //   title: "test",
        //   time: "3:00AM-4:00PM",
        //   start: "2019-07-26T16:30:00",
        //   end: "2019-07-26T17:30:00",
        //   slotDuration: "00:15:00",
        //   resourceEditable: true
        // },
        // {
        //   id: "a",
        //   title: "test",
        //   time: "3:00AM-4:00PM",
        //   start: "2019-07-26T16:30:00",
        //   end: "2019-07-26T17:30:00",
        //   slotDuration: "00:15:00",
        //   resourceEditable: true
        // }
      ],
      showEventModal:false
    };
  }

  render() {
    return (
      <div>
        {console.log(this.state.showEventModal)}
      <div><Button variant="contained" onClick={this.openModalHandler }>Add Event</Button>
      <Modal isOpen={this.state.showEventModal}
      //ariaHideApp={false} 
          
          contentLabel="NEW EVENT" 
          onRequestClose={this.closeModalHandler}
          style={customStyles}>
           <TabContainer> 
          <FormControl required>
            <InputLabel htmlFor="eventdate">Select Date</InputLabel>
            <Input type="date" id="eventdate" name="eventDate"></Input>
            
            </FormControl>

            <FormControl required>
            <InputLabel>Select Time</InputLabel>
            <Input type="time" id="" name="eventTime"></Input>
            
            </FormControl>

            <FormControl required>
            <InputLabel>Event Description</InputLabel>
            <Input type="text" name="eventDescription"></Input>
          
            </FormControl>
            <Button onClick={this.createEventHandler}>SAVE</Button>
            <Button onClick={this.closeModalHandler}>CLOSE</Button>
            </TabContainer>
      </Modal></div>
      <div id="example-component">
        
        
        <FullCalendar
          id="your-custom-ID"
          header={{
            left: "prev,next today myCustomButton",
            center: "title",
            right: "month,basicWeek,basicDay"
          }}
          plugins={[dayGridPlugin, interactionPlugin]}
          defaultDate={Date.now()}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too mants
          events={this.state.calendarEvents}
          selectable
          selectHelper
          select={this.handleDateClick}
          eventClick={() => {
            console.log("DATE CLICK");
          }}
          displayEventEnd={true}
        />
        {/* <form
          onSubmit={this.onSubmitHandler}
          style={{ display: this.state.formStyle ? "block" : "none" }}
        >
          <label htmlFor="eventDate" type="date">EVENT DATE:{this.state.eventDate}</label>
        
          <br />
          <br />
          <label htmlFor="eventTime">EVENT TIME</label>
          <input
            id="eventTime"
            type="time"
            placeholder="hh:mm:secs"
            name="eventTime"
            value={this.state.eventData.eventTime}
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <label htmlFor="description">EVENT DESCRIPTION</label>
          <input
            id="description"
            type="text"
            placeholder="Describe your event.."
            name="eventDescription"
            value={this.state.eventData.eventDescription}
            onChange={this.onChangeHandler}
          />
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="text"
            placeholder="hh:mm:secs"
            name="eventDuration"
            value={this.state.eventData.eventDuration}
            onChange={this.onChangeHandler}
          />
          <input id="submitButton" type="submit" value="ADD EVENT" />
        </form> */}

      </div>
      </div>
    );
  }
 openModalHandler=e=>{
   debugger;
    this.setState({showEventModal:true})
  }
  closeModalHandler=e=>{
    this.setState({showEventModal:false})
  }
  
  onSubmitHandler = e => {
    e.preventDefault();
    // console.log(arg.dateStr)
    // console.log(eventData);
    console.log(this.state.eventData.eventDescription);
    console.log(this.state.eventData.eventDate);
    console.log(this.state.eventData.eventTime);
   // console.log(this.state.eventData.eventDuration);
    
    //this.setState({ formStyle: false });
    this.setState({
      // add new event data
      calendarEvents: this.state.calendarEvents.concat({
        // creates a new array
        title: this.state.eventData.eventDescription,
        start: this.state.eventData.eventDate,
       // slotDuration: this.state.eventData.eventDuration
        //startTime:this.state.eventData.eventTime,
        //allDay:false,
        //slotDuration:'00:15:00'
      })
    });
    
    console.log(this.state.calendarEvents);
  };
  onChangeHandler = e => {
    this.setState({
      eventData: { ...this.state.eventData, [e.target.name]: e.target.value }
    });
  };
  createEventHandler=e=>{
    alert("Event Successfully Created!!");
  }
  // handleDateClick = select => {
  //   this.setState({ showEventModal: true });
  //   this.createEvent(select);
  //   {
  //     console.log(select._d);
  //     let d = new Date(select._d);
  //     let dd= d.getUTCDate();
  //     let mm=d.getUTCMonth();
  //     let yy=d.getUTCFullYear();
  //     let date= [dd,+mm,+yy].join('/');
      //let date1 = new Date(date);
     // console.log(date1);
      //let d1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(select._d);
      //console.log(d1);
      //console.log(d.getUTCDate()+d.getUTCMonth()+d.getFullYear());
  //     this.setState({eventDate: date.toString() });
  //   }
  //   console.log("Hello");
  // };
  
  
}

