

export default function Product(props) {
    let month =props.date.toLocaleString('en-US', {month: 'long'});
    let day = props.date.toLocaleString('en-US', {day: '2-digit'});
    let year = props.date.getFullYear();
    let amount = props.amount.toLocaleString('en-US', {style : "currency" , currency : 'USD'});
    return (
        <div>
            <article className="product">
                <div>
                    <h2>{props.title}</h2>
                    <div className="price">{amount}</div>    
                </div>   
                <div className="expense-date ">
                    <div className="expense-date__month">{month}</div>
                    <div className="expense-date__year">{year}</div>
                    <div className="expense-date__day">{day}</div>
                </div> 
            </article>
        </div>
    );
}