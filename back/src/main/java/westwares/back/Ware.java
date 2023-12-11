package westwares.back;

public class Ware {
	private String name;
	private int price;
	private int stock;
	
	public Ware(String name, int price, int stock) {
		super();
		this.name = name;
		this.price = price;
		this.stock = stock;
	}
	public String getName() {
		return name;
	}
	public int getPrice() {
		return price;
	}
	public int getStock() {
		return stock;
	}
	@Override
	public String toString() {
		return "Ware [name=" + name + ", price=" + price + ", stock=" + stock + "]";
	}
	
}
