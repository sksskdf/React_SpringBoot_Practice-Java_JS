package com.harry.rsbe.controller;

import com.harry.rsbe.entity.User;
import com.harry.rsbe.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user") //user controller
@RequiredArgsConstructor
public class controller {

    private final UserRepository userRepository;

    @GetMapping("/list")
    public List<User> user(){
        List<User> findAllList = userRepository.findAll();
        return findAllList;
    }
    @PutMapping("/add")
    public void addUser(@RequestBody User user){
        userRepository.save(user);
    }
}
