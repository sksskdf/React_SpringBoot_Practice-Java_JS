package com.harry.rsbe.repositoryTest;

import com.harry.rsbe.entity.User;
import com.harry.rsbe.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
public class userRepositoryTest {
    @Autowired
    private UserRepository ur;

    @Test
    void 세이브_조회테스트(){
        //g
        User user = User.builder()
                .username("harry")
                .password("1234")
                .phone_number("010-1234-1234")
                .build();
        //w
        User savedUser = ur.save(user);
        Optional<User> findUser = ur.findById(1);
        //t
        Assertions.assertEquals(savedUser.getUsername(),"harry");
        Assertions.assertEquals(findUser.get().getUsername(),"harry");

    }
}
