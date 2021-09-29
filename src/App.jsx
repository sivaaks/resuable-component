import Card from './Card';


export default function App(){

    const cards=[
        {
            title:'Earnings (Monthly)',
            amount:'$40,000',
            icon:'calendar',
            variant:'primary',
            type:'number',
        },
        {
            title:'Pending requests',
            amount:'18',
            icon:'comments',
            variant:'success',
            type:'number',
        },
        {
            title:'Earnings (Yearly)',
            amount:'$480,000',
            icon:'dollar-sign',
            variant:'warning',
            type:'number',
        },
        {
            title:'Pending tasks',
            amount:'20',
            icon:'clipboard',
            variant:'info',
            type:'percent',
        },
        {
            title:'Resolved requests',
            amount:'12',
            icon:'comments',
            variant:'success',
            type:'number',
        },
        {
            title:'Completed tasks',
            amount:'80',
            icon:'clipboard',
            variant:'info',
            type:'percent',
        },
        {
            title:'Earnings (weekly)',
            amount:'$10,000',
            icon:'calendar',
            variant:'primary',
            type:'number',
        },
        {
            title:'Earnings (Quaterly)',
            amount:'$120,000',
            icon:'dollar-sign',
            variant:'warning',
            type:'number',
        },
    ];

    return(
      <>
      {cards.map(card=>{
          return(
            <Card title={card.title} amount={card.amount} icon={card.icon} variant={card.variant} type={card.type}></Card>
          )
      })}
              
      </>
    )
}