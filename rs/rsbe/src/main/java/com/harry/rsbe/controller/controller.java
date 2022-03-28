package com.harry.rsbe.controller;

import com.harry.rsbe.entity.User;
import com.harry.rsbe.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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

    private final PasswordEncoder passwordEncoder;

    //유저리스트
    @GetMapping("/list")
    public List<User> user(){
        List<User> findAllList = userRepository.findAll();
        return findAllList;
    }
    
    //회원가입
    @PostMapping(value = "/add",produces="application/json")
    @ResponseBody
    public ResponseEntity addUser(@RequestBody User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        log.info("CallAddUser"+user.toString());


        return new ResponseEntity<>("success",HttpStatus.OK);
    }
    
    //로그인
/*    @PostMapping(value="/login",produces = "application/json")
    @ResponseBody
    public ResponseEntity login(@RequestBody User user){
        //user받고 findby
        userRepository.findBy
    }*/
}
