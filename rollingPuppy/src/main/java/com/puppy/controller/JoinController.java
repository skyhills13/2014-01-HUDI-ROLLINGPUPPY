	package com.puppy.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.puppy.dao.impl.MemberDaoImpl;
import com.puppy.dto.Member;

/*
 * 회원 정보들을 가지고 POST방식으로 들어오는 회원가입 요청을 처리하는 컨트롤러
 */
public class JoinController  extends HttpServlet {
	
	private static final long serialVersionUID = 4508657724339885753L;
	private static final Logger log = LoggerFactory.getLogger(JoinController.class);
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		log.info("JoinController doPost");
		
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		MemberDaoImpl memberDao = new MemberDaoImpl();
		Member member = new Member();

		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		member.setEmail(email);
		member.setPw(password);
		
		out.println(memberDao.insertMemberInfo(member));
		response.sendRedirect("/");
	}
}