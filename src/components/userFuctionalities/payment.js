import React from 'react';
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import Navibar from './navbar';
function Payment() {
  return (
	<>
	<Navibar/>
    <div className="payment-container">
		<div className="left">
			<h3 className='billing'>BILLING ADDRESS</h3>
			<form>
				Full name
				<input type="text" name="" placeholder="Enter name"/>
				Email
				<input type="text" name="" placeholder="Enter email"/>

				Address
				<input type="text" name="" placeholder="Enter address"/>
				
				City
				<input type="text" name="" placeholder="Enter City"/>
				<div id="zip">
					<label>
						State
						<select>
							<option>Choose State..</option>
							<option>Rajasthan</option>
							<option>Hariyana</option>
							<option>Uttar Pradesh</option>
							<option>Madhya Pradesh</option>
						</select>
					</label>
						<label>
						Zip code
						<input type="number" name="" placeholder="Zip code"/>
					</label>
				</div>
			</form>
		</div>
		<div className="right">
			<h3 className='payment'>PAYMENT</h3>
			<form>
				Accepted Card <br/>
				<img src={card1}  width="100"/>
				<img src={card2}  width="50"/>
				<br></br>

				Credit card number
			  <input type="text" name="" placeholder="Enter card number"/>
				
				Exp month
				<input type="text" name="" placeholder="Enter Month"/>
				<div id="zip">
					<label>
						Exp year
						<select>
							<option>Choose Year..</option>
							<option>2022</option>
							<option>2023</option>
							<option>2024</option>
							<option>2025</option>
						</select>
					</label>
						<label>
						CVV
						<input type="number" name="" placeholder="CVV"/>
					</label>
				</div>
			</form>
			<input type="submit" name="" value="Proceed to Checkout"/>
		</div>
	</div>
	</>
  )
}

export default Payment;