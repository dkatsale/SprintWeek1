package com.example.demo_angular;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class GreetingController {
	
	private String secretMessage = "";
	
	
    @GetMapping("/greet")
    public String greet() {
        return "Hello, World!";
    }
    
    @PostMapping("/greet")
    public String angular(@RequestBody String fromAngular) {
    	System.out.println(fromAngular);
    	secretMessage = fromAngular;
    	return fromAngular;
    }
    @GetMapping("/secret")
    public String secret() {
        return secretMessage;
    }

    /*@PostMapping("/greet")
    public String greet(@RequestBody String name) {
        return "Hello, " + name;
    }*/
}
