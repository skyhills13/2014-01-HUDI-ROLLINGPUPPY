package com.puppy.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.puppy.util.Constants;

/*
 * 로그인 이후 사용자가 머무는 유일한 페이지
 */
public class MainController implements Controller {
	
	private static final Logger logger = LoggerFactory.getLogger(MainController.class);
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		logger.info("into doPost");
		
		HttpSession session = request.getSession();

		// 세션 값이 없는 경우 index 페이지로 리다이렉트
		if ( session.getAttribute(Constants.SESSION_MEMBER_EMAIL) == null ) {
			response.sendRedirect("/");
			return;
		}
		
		RequestDispatcher view = request.getRequestDispatcher("main.jsp");
		view.forward(request, response); 
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}
}
