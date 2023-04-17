let $=document;
const hours_elem=$.getElementById('hours')
const min_elem=$.getElementById('min')
const sec_elem=$.getElementById('sec')
const reset_btn=$.getElementById('reset')
const start_btn=$.getElementById('start')
const stop_btn=$.getElementById('stop')
const record_name=$.getElementById('record-name')
const add_todo=$.getElementById('add-todo')
const container_records=$.getElementById('records-container')
let secound=0
let min=0
let hours=0
let index_item=0
let records_array=[];

start_btn.addEventListener('click',()=>{
       let timerstart=setInterval(() => {
            secound++
            if(secound<10){
                sec_elem.innerHTML='0'+secound
            }else{
                sec_elem.innerHTML=secound
            }
            if(secound==60){
            secound=0
            sec_elem.innerHTML='00';    
            min++
            if(min<10){
                min_elem.innerHTML='0'+min+':'
            }else{
                min_elem.innerHTML=min+':'
            }
            if(min==60){
            min=0
            min_elem.innerHTML='00'+':'
            hours++
            }
            if(hours<10){
                hours_elem.innerHTML='0'+hours+":"
            }else{
                hours_elem.innerHTML=hours+':'
            }
        }
        },1000);
        stop_btn.addEventListener('click',()=>{
            clearInterval(timerstart)  
        })
        reset_btn.addEventListener('click',()=>{
        location.reload()
        })
    })
    add_todo.addEventListener('click',()=>{
        let record_title=prompt('enter record name :')
        let record_body=document.createElement('div')
        record_body.classList.add('record')
        let record_name_container=document.createElement('div')
        record_body.append(record_name_container)
        let record_name_Elem=document.createElement('p')
        record_name_container.append(record_name_Elem)
        record_name_Elem.classList.add('record__name')
        let record_btn_container=document.createElement('div')
        record_body.append(record_btn_container)
        let record_btn_Elem=document.createElement('button')
        record_btn_container.append(record_btn_Elem)
        record_btn_Elem.classList.add('record__delete')
        record_btn_Elem.innerHTML='DELETE'
        container_records.append(record_body)
        
        record_btn_Elem.addEventListener('click',()=>{
           let delete_elem_id=records_array.findIndex((items)=>{
            return items.id==record.id
           })
           record_body.remove()
           records_array.splice(delete_elem_id,1);
           console.log(records_array);
           localStorage.setItem('item',JSON.stringify(records_array))
        })
        
        let record ={
            id:records_array.length+1,
            name:record_title+'_'+hours+':'+min+':'+secound
        }
        records_array.push(record)
        localStorage.setItem('item',JSON.stringify(records_array))
        records_array.forEach((item)=>{
        record_name_Elem.innerHTML=item.name   
        })
    
    })
    window.addEventListener('load',()=>{
        let localarray=JSON.parse(localStorage.getItem('item'))
        if(localarray){
            records_array=localarray
            console.log(records_array);
        }else{
            records_array=[]
        }
       localStorage_generator(localarray)
    })


    function localStorage_generator(record){
        record.forEach((creat)=>{
            let record_body=document.createElement('div')
            record_body.classList.add('record')
            let record_name_container=document.createElement('div')
            record_body.append(record_name_container)
            let record_name_Elem=document.createElement('p')
            record_name_container.append(record_name_Elem)
            record_name_Elem.classList.add('record__name')
            let record_btn_container=document.createElement('div')
            record_body.append(record_btn_container)
            let record_btn_Elem=document.createElement('button')
            record_btn_container.append(record_btn_Elem)
            record_btn_Elem.classList.add('record__delete')
            record_btn_Elem.innerHTML='DELETE'
            container_records.append(record_body)
            record_name_Elem.innerHTML=creat.name
            
            record_btn_Elem.addEventListener('click',()=>{
                if(records_array.length==1){
                    localStorage.clear()
                    location.reload()
                }else{
                    localStorage.removeItem('item')
                    Location.record()
                }
                
            })
        })
    }