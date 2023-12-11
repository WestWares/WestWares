package westwares.back;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RouterController {

	@RequestMapping("/wares")
	public List<Ware> getWares() {
		return Arrays.asList( 
				new Ware("Ware 1", 10, 5),
				new Ware("Ware 2", 20, 10),
				new Ware("Ware 3", 30, 15)
				);
	}
}
