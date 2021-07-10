import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>July 9th 2021</div>
      <div className="expense-item__description">
        <h2>Cat Scratchers</h2>
        <div className="expense-item__price">$23.29</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
