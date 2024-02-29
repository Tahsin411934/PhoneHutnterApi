const loadData = async(searchText, isShowAll)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data= await res.json();
    displayData(data.data, isShowAll);
    console.log(isShowAll)
    const input= document.getElementById('input');
    
}

const displayData = (datas,isShowAll)=>{
    console.log(isShowAll)
    const dataContainer=document.getElementById('dataContainer')
    const showAll=document.getElementById('showAll');
        dataContainer.textContent='';
        let dataLength=datas.length;
        if (dataLength>10) {
            
            showAll.classList.remove('hidden')
        }
        else{
            showAll.classList.add('hidden') 
            input.value=''; 
        }
    

    if (!isShowAll) {
        datas= datas.slice(0,5); 
    }
    datas.forEach(data => {

        
        const div = document.createElement('div');
        div.classList = 'card w-96 bg-base-100 shadow-xl bg-white mb-10 p-10';
        div.innerHTML = ` <figure><img src="${data.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${data.phone_name}</h2>
          <p>'${data.slug}'</p>
          <div class="card-actions justify-end">
            <button onclick='showDetail("${data.slug}"); my_modal_3.showModal()' class="btn btn-primary">Buy Now</button>
          </div>
        </div> `;

        dataContainer.appendChild(div)
    });
    loadSpinner(false)
   
   
}

const searchData=(isShowAll)=>{
    const input= document.getElementById('input');
    loadData(`${input.value}`,isShowAll);
    loadSpinner(true)
    console.log(isShowAll)
    
}



const loadSpinner=(isLodding)=>{
    if (isLodding) {
        const isHidden= document.getElementById('isHidden');
        isHidden.classList.remove('hidden') 
    }
    else{
        const isHidden= document.getElementById('isHidden');
        isHidden.classList.add('hidden')
    }
    

}


 const showAll=(isShowAll)=>{
        
    searchData(true)
    input.value=''; 
 }

console.log('connected')
