package com.harry.rsbe.controller;

import com.harry.rsbe.entity.User;
import com.harry.rsbe.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user") //user controller
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@Slf4j
public class controller {

    private final UserRepository userRepository;

    @GetMapping("/list")
    public List<User> user(){
        List<User> findAllList = userRepository.findAll();
        return findAllList;
    }
    @PostMapping(value = "/add",produces="application/json")
    @ResponseBody
    public ResponseEntity addUser(@RequestBody User user){
        userRepository.save(user);
        log.info("CallAddUser"+user.toString());


        return new ResponseEntity<>("success",HttpStatus.OK);
    }
}
