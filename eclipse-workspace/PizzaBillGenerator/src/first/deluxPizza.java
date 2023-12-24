package first;

public class deluxPizza extends Pizza {

	public deluxPizza(boolean veg) {
		super(veg);
		super.addExtraCheese();
		super.addExtraToppings();
	}

}
