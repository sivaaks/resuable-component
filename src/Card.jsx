
export default function returnCard(props){

    return (
        <div class="col-xl-3 col-md-6 mb-4">
        <div class={`card border-left-${props.variant} shadow h-100 py-2`}>
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            {props.title}</div>
                            {props.type==='number'?<div class="h5 mb-0 font-weight-bold text-gray-800">{props.amount}</div>
                            :<div class="row no-gutters align-items-center">
                            <div class="col-auto">
                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.amount}%</div>
                        </div>
                    <div class="col">
                         <div class="progress progress-sm mr-2">
                            <div class="progress-bar bg-info" role="progressbar"
                                style={{"width": `${props.amount}%` ,"aria-valuenow":"50", "aria-valuemin":"0",
                                            "aria-valuemax":"100"}}>
                            </div>
                        </div>
                        </div>
                        </div>
                        }
                    </div> 
                    <div class="col-auto">
                    <i class={`fas fa-${props.icon} fa-2x text-gray-300`}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}