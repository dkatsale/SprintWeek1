package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class GreetingController {

    @GetMapping("/greet")
    public String greet() {
        return "Hello, World!";
    }

    @PostMapping("/greet")
    public String greet(@RequestBody String name) {
        return "Hello, " + name;
    }
}
