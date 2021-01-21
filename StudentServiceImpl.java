/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package com.student.service.impl;

import com.liferay.counter.kernel.service.CounterLocalServiceUtil;
import com.liferay.portal.aop.AopService;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSON;
import com.liferay.portal.kernel.json.JSONDeserializer;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.jsonwebservice.JSONWebService;
import com.liferay.portal.kernel.template.Template;
import com.student.model.Student;
import com.student.service.StudentLocalService;
import com.student.service.base.StudentServiceBaseImpl;

import java.util.List;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

/**
 * The implementation of the student remote service.
 *
 * <p>
 * All custom service methods should be put in this class. Whenever methods are added, rerun ServiceBuilder to copy their definitions into the <code>com.student.service.StudentService</code> interface.
 *
 * <p>
 * This is a remote service. Methods of this service are expected to have security checks based on the propagated JAAS credentials because this service can be accessed remotely.
 * </p>
 *
 * @author Brian Wing Shun Chan
 * @see StudentServiceBaseImpl
 */
@Component(
	property = {
		"json.web.service.context.name=foo",
		"json.web.service.context.path=Student"
	},
	service = AopService.class
)
public class StudentServiceImpl extends StudentServiceBaseImpl {
	@JSONWebService
	public List<Student> getAllStudents(){
		List<Student> students  = studentLocalService.getStudents(0, studentLocalService.getStudentsCount());
		System.out.println(students);
		
		return students;
	}
	
	@JSONWebService
	public String  deleteStudent(long studentId) throws PortalException{
		studentLocalService.deleteStudent(studentId);
		
		return "student deleted";
	}
	@Override
	@JSONWebService(method="POST")
	public String  addStudent(String  student) throws PortalException{
		
		//Object studentobj = JSONFactoryUtil.looseDeserialize(student);
//		static <Student> studentobj = JSONFactoryUtil.looseDeserialize(student, Class<Student>);
//		
//		
//		System.out.println("Deserialize  : "+studentobj.getEducation());
		
		System.out.println("before conmverting"+student);
		JSONObject createJSONObject = JSONFactoryUtil.createJSONObject(student);
		System.out.println("to String ");
		System.out.println(createJSONObject.toString());
		Student studentObject = studentLocalService.createStudent(CounterLocalServiceUtil.increment(Student.class.getName())); 
		studentObject.setEducation(createJSONObject.getString("education"));
		studentObject.setName(createJSONObject.getString("name"));
		studentObject.setEmail(createJSONObject.getString("email"));
		studentLocalService.addStudent(studentObject);
		
		return "student record added";
	}

	 
	
	@Override
	public String getStudent(long studentId) throws PortalException {
		// TODO Auto-generated method stub
		return null;
	}


	
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never reference this class directly. Always use <code>com.student.service.StudentServiceUtil</code> to access the student remote service.
	 */
}