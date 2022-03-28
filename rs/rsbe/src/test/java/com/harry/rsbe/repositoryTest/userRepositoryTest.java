package com.harry.rsbe.repositoryTest;


import com.harry.rsbe.entity.User;
import com.harry.rsbe.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

@SpringBootTest
public class userRepositoryTest {
    @Autowired
    private UserRepository ur;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    void 세이브_조회테스트(){
        //g
        User user = User.builder()
                .username("harry")
                .password(passwordEncoder.encode("1234"))
                .phone_number("010-1234-1234")
                .build();
        //w
        User savedUser = ur.save(user);
        Optional<User> findUser = ur.findById(1);
        //t
        System.out.println(user.getPassword());
        Assertions.assertEquals(savedUser.getUsername(),"harry");
        Assertions.assertEquals(findUser.get().getUsername(),"harry");

    }

    @Test
    void 유저네임찾기(){
        //g
        User user = User.builder()
                .username("harry")
                .password(passwordEncoder.encode("1234"))
                .phone_number("010-1234-1234")
                .build();
        //w
        User savedUser = ur.save(user);
        User findUser = ur.findByUsername("harry");
        //t
        Assertions.assertEquals(findUser.getUsername(),"harry");
    }
    
    @Test
    void 로그인(){
        //g
        User user = User.builder()
                .username("harry")
                .password(passwordEncoder.encode("1234"))
                .phone_number("010-1234-1234")
                .build();
        //w
        User savedUser = ur.save(user);
        User findUser = ur.findByUsername("harry");
        //t
        //1번째 인자 : 아이디로 찾은 user entity 패스워드
        //2번째 인자 : 받은 패스워드 인코더돌리면 됨
        System.out.println("저장시 패스워드 :" + user.getPassword());
        System.out.println("파인드유저시 패스워드 :" + findUser.getPassword());
        System.out.println("넘겨받은 인코딩 패스워드 :" + passwordEncoder.matches());
        //Assertions.assertEquals(findUser.getPassword(),passwordEncoder.encode("1234"));
    }
}
