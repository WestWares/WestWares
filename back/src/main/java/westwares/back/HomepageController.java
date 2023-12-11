package westwares.back;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class HomepageController {

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

}
