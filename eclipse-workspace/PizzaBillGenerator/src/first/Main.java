package first;

public class Main {

	public static void main(String[] args)
	{
		System.out.println("*********Pizza Bill Generator**********");
		Pizza basePizza = new Pizza(false);
		basePizza.addExtraCheese();
		basePizza.addExtraToppings();
		basePizza.takeAway();
		basePizza.getBill();
		
//		deluxPizza dp = new deluxPizza(true);
//		dp.getBill();
	}

}
